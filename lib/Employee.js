/* Employee is a parent for other staff rolls
   and is not intended to be called directly.
   Please refer to other modules in the lib 
   folder for child staff members.
*/

export class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return this.constructor.name
  }
}
