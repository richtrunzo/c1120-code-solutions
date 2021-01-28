function graduate(credential) {
    return function secondFunc(fullName) {
      return fullName + ", " + credential
    }
}

let medicalSchool = graduate('M.D.')
let lawschool = graduate('Esq.')
