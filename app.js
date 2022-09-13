const pad1 = document.getElementById("pad1")
const pad2 = document.getElementById("pad2")
const pad3 = document.getElementById("pad3")
const pad4 = document.getElementById("pad4")
const pad5 = document.getElementById("pad5")
const pad6 = document.getElementById("pad6")
const pad7 = document.getElementById("pad7")
const pad8 = document.getElementById("pad8")
const pad9 = document.getElementById("pad9")

const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")
const kick = document.getElementById("kick")
const openHat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")

const pads = [pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9]
const padSelector = pads


padSelector.forEach(pads => {
  pads.addEventListener('mouseover', () => {
    pads.src="drumButtonHit.png"
  });
});

padSelector.forEach(pads => {
    pads.addEventListener('mouseleave', () => {
      pads.src="drumButton.png"
    });
  });



//Click Controls

pad1.addEventListener('click', () => {
        snare.play()
    });

pad2.addEventListener('click', () => {
    tink.play()

})

pad3.addEventListener('click', () => {
    tom.play()
})

pad4.addEventListener('click', () => {
    kick.play()
})

pad5.addEventListener('click', () => {
    openHat.play()
})

pad6.addEventListener('click', () => {
    ride.play()
})

pad7.addEventListener('click', () => {
    boom.play()
})

pad8.addEventListener('click', () => {
    clap.play()
})

pad9.addEventListener('click', () =>{
    hihat.play()
})


//Key Controls

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 49 || e.keyCode == 97) {
     snare.play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 50 || e.keyCode == 98) {
     tink.play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 51 || e.keyCode == 99) {
     tom.play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 52 || e.keyCode == 100) {
     kick.play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 53 || e.keyCode == 101) {
     openHat.play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 54 || e.keyCode == 102) {
     ride.play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 55 || e.keyCode == 103) {
     boom.play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 56 || e.keyCode == 104) {
     clap.play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 57 || e.keyCode == 105) {
     hihat.play();
    }
  });