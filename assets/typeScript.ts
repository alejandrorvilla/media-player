function types() {
  //boolean
  let isVisible: boolean = true;

  //string
  let name: string = "Jose";

  //number
  let num: number = 5;

  //Array
  let people: string[] = [name, "Alejandro"];
  let stringAndNumbers: Array<string | number> = [...people, num, 54];

  //Enum
  enum Color {
    blue = "Azul",
    yellow = "Amarillo",
    red = "Rojo",
    green = "Verde",
  }
  let color: Color = Color.blue;

  //Any
  let any: any = 3;
  any = "otro";
  any = {};

  //Tuple
  let tuple: [string, number] = ["Alejandro", 26];
  //error tuple = [26, 'Alejandro']

  //Unknown
  let notSure: unknown = 4;
  notSure = "maybe a string instead";
  notSure = false;

  //void
  let test = (): void => {}
  let test2 = (): never => {
	throw new Error("Nunca retorna nada")
  }
}

interface Person {
	name: string
	lastName: string
	email: string
	age: number
	birthDate: Date,
	address: string
}
