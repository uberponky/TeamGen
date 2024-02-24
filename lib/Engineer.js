/* Engineer returns an object containing
   an Engineer staff member and must be called with
   a name, id, email and github username
*/

import { Employee }  from './Employee.js'

export class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }

  getGithub() {
    return this.github
  }
}