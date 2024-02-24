/* Manager returns an object containing
   an Manager staff member and must be called with
   a name, id, email and an office number
*/

import { Employee }  from './Employee.js'

export class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }

  getOfficeNumber() {
    return this.officeNumber
  }
}