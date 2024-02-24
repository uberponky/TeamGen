/* Intern returns an object containing
   an Intern staff member and must be called with
   a name, id, email and school
*/

import { Employee }  from './Employee.js'

export class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }

  getSchool() {
    return this.school
  }
}