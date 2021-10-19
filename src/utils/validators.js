
const validate = {
    minAge({ minAge, date }) {
        const age = getAge(date)

        return age >= minAge
    },
    maxAge({ maxAge, date }) {
        const age = getAge(date)
        return age <= maxAge
    },
    cpf({ cpf }) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') return false;
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito	
        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito	
        add = 0;
        for (let i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    },
    minValue({value, minValue}) {
        //Formato recebido R$ 10,99
        return !(Number(value.replace("R$ ","").replace(",",".")) < minValue)
    }
}

function getAge(date) {
    const [year, month, day] = date.split("-")

    const currentDate = new Date
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDay()

    if (currentMonth >= month && currentDay >= day) {
        return (currentYear - year)
    } else {
        return (currentYear - year) - 1
    }
}

export default validate;