export function validation(dog) {
    let errors = {};

    if ( dog.name.length < 3 || dog.name.length > 12) {
        errors.name = 'el nombre no puede tener menos de 3 o más de 12 letras';
      }
      
    const life_span = parseInt(dog.life_span);
    const weight = parseInt(dog.weight)
    const height = parseInt(dog.height)
    if(life_span < 5 || life_span > 30 || life_span === ""){
        errors.life_span = "la edad del perro debe ser entre 5 y 30"
    }
    if(weight < 2 || weight > 35 ){
        errors.weight = "el peso del perro debe ser entre 2 y 35 kg"
    }
    if(height < 15 || height > 90 ){
        errors.height = "la altura del perro debe ser entre 15 y 90 cm"
    }
    return errors
}