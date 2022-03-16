
function justOneTime(times, execute_target) {

  again = true

  while (times > 0) {

    execute_target()
    times = times - 1


  };


};

let x = true

justOneTime( 10,  () => console.log('prueba de func'))
document.addEventListener('DOMContentLoaded', () => {

  //const timeCounter = document.querySelector('#currentTime')
  //const timeContainer = document.querySelector('#timelack')

  //const daySeconds = 86400
  //const hourSeconds = 3600
  //const minuteSeconds = 60


  //obtainTimeString = () => {
    //const time = new Date()
    //var hours = time.getHours()
    //let minutes = time.getMinutes()
    //var seconds = time.getSeconds()


    //let lackSeconds = daySeconds - ((hours * hourSeconds) + (minutes * minuteSeconds) + seconds)
    //let currentTimeString = `${hours} horas, ${minutes} minutos y ${seconds} segundos.`



    //const birthdayCongrat = document.querySelector('#birthdayCongrat')

    //if (lackSeconds < 1 && lackSeconds > -60) {

      //x = false





    //} else if (lackSeconds < -60) {
      //document.querySelector('body').innerHTML = '<h1>¡¡¡Feliz cumpleaños, <b>cara de yuca.</b></h1>'

    //} else {

      //timeContainer.innerHTML = `Faltan <b>${lackSeconds}</b> segundos.`
      //timeCounter.innerHTML =  `La hora actual es: <b>${ currentTimeString }</b>`
      //birthdayCongrat.innerHTML = "Aún tienes la misma edad."
      //document.querySelector('h1').innerHTML = '¿Cuántos segundos faltan para el cumpleaños de Yanna?'




    //};

  //};

  //setInterval(() => obtainTimeString(), 1000)

  birthdayCongrat.innerHTML = "!!!Feliz cumpleaños, querida prima¡¡¡ Deseo que tu vida esté repleta de felicidad y cosas buenas y que puedas lograr tus metas y deseos. Espero que hayan muchísimos más días como este y que cada uno sea mejor que el anterior. . "

  birthdayCongrat.style.textAlign = 'left'
  document.querySelector('h1').innerHTML = 'Feliz 23 años, yuca.'

  const yannaImage = document.createElement('img')
  yannaImage.src = 'yanna_picture.jpeg'


  document.querySelector('body').append(yannaImage)
  yannaImage.style.width = '60vw'


  


})
