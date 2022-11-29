const dmv = {
    // Social Security is the numbered value
    123456789: {
      fullName: 'Arden Archer',
      driversLicense: 'H28309231',
      dateOfBirth: '01/11/1999',
      passportNumber: 4321,
      passportExpiration: '11/16/2033'
    },
  
    987654321: {
      fullName: 'Alex Zones',
      driversLicense: 'B18339138',
      dateOfBirth: '07/19/1980',
      passportNumber: 1234,
      passportExpiration: '11/16/2033'
    },
  }

  export function getIn(inputStr) {
    if (inputStr in dmv){
        return dmv[inputStr]
    } else {
        return false
    }
    }