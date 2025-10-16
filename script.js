
const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');


const colores = {
    cielo: '#1A1A2E',
    sol: '#F7C851',
    estrellas: '#FFFFFF',
    montana1: { 
        principal: '#7A4D9B', 
        sombra: '#5C3A7A'
    },
    montana2: { 
        principal: '#4A6C9B', 
        sombra: '#3A557A'
    },
    montana3: { 
        principal: '#9B7A4D', 
        sombra: '#7A5C3A'
    },
    montana4: { 
        principal: '#8C3B7A', 
        sombra: '#6B2D5C'
    },
    montana5: { 
        principal: '#2E8B57', 
        sombra: '#256D44'
    }
};


function dibujarFondo() {
    ctx.fillStyle = colores.cielo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**

 * @param {number} cantidad 
 */
function dibujarEstrellas(cantidad) {
    ctx.fillStyle = colores.estrellas;
    for (let i = 0; i < cantidad; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height * 0.7);
        const radio = Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, Math.PI * 2);
        ctx.fill();
    }
}


function dibujarSol() {
    ctx.fillStyle = colores.sol;
    ctx.beginPath();
    ctx.arc(canvas.width * 0.75, canvas.height * 0.25, 80, 0, Math.PI * 2);
    ctx.fill();
}

/**

 * @param {number} baseX 
 * @param {number} anchura 
 * @param {number} altura 
 * @param {string} colorPrincipal 
 * @param {string} colorSombra 
 */
function dibujarMontana(baseX, anchura, altura, colorPrincipal, colorSombra) {
    const picoX = baseX + anchura / 2;
    const picoY = canvas.height - altura;

   
    ctx.fillStyle = colorSombra;
    ctx.beginPath();
    ctx.moveTo(baseX, canvas.height);
    ctx.lineTo(picoX, picoY);
    ctx.lineTo(picoX, canvas.height);
    ctx.closePath();
    ctx.fill();
    
   
    ctx.fillStyle = colorPrincipal;
    ctx.beginPath();
    ctx.moveTo(baseX + anchura, canvas.height);
    ctx.lineTo(picoX, picoY);
    ctx.lineTo(picoX, canvas.height);
    ctx.closePath();
    ctx.fill();
}


function dibujarNombre() {
    ctx.fillStyle = '#FFFFFF'; 
    ctx.font = '20px Arial';    
    ctx.fillText('Francesca Sanguinetti', 20, canvas.height - 20); 
}


function dibujarEscena() {
    
    dibujarFondo();
    dibujarEstrellas(150);
    dibujarSol();

   
    dibujarMontana(canvas.width * 0.05, 700, 400, colores.montana1.principal, colores.montana1.sombra);
    dibujarMontana(0, 450, 300, colores.montana2.principal, colores.montana2.sombra);
    dibujarMontana(canvas.width * 0.5, 400, 280, colores.montana3.principal, colores.montana3.sombra);
    dibujarMontana(canvas.width * 0.15, 350, 250, colores.montana4.principal, colores.montana4.sombra);
    dibujarMontana(canvas.width * 0.6, 300, 220, colores.montana5.principal, colores.montana5.sombra);

   
    dibujarNombre();
}


dibujarEscena();