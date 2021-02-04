let title='Custom alert box';

let container = document.createElement('div');
container.innerHTML = '<div id="alert-container"><div id="alert-box"><div id="icon"><img id="success" src="https://i.ibb.co/ZW3PqSx/success.png" id="success"><img id="error" src="https://i.ibb.co/K5FxjZR/error.png" alt="error"><img id="warning" src="https://i.ibb.co/yNtxrXd/warning.png" alt="warning"><img id="info" src="https://i.ibb.co/FB7SQ9t/info.png" alt="info"></div><div id="title-bar"> <h3 id="title">'+title+'</h3> </div><div id="text-bar"> <p id="text"></p></div><div id="button"> <button id="btn">OK</button></div></div></div>'
document.body.appendChild(container);

// styling the whole container wrapper
container.style.cssText = `width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);position: absolute;left: 0;top: 0;display: none;justify-content: center;align-items: center;z-index: 100;`;


// styling the alert box
document.getElementById('alert-box').style.cssText = `width: 400px;height: auto;background-color:#ecf0f1;padding: 30px;text-align: center;border-radius: 10px;`;

//styling the icon
document.getElementById('icon').style.cssText = ` font-size: 50px;line-height: 0px;text-align: center;`;
document.getElementById('success').style.cssText = `display: none;height: 80px;width: 80px;margin: 5px auto 10px auto;`;
document.getElementById('warning').style.cssText = `display: none;height: 80px;width: 80px;margin: 5px auto 10px auto;`;
document.getElementById('error').style.cssText = `display: none;height: 80px;width: 80px;margin: 5px auto 10px auto;`;
document.getElementById('info').style.cssText = `display: none;height: 80px;width: 80px;margin: 5px auto 10px auto;`;


// styling the title
document.getElementById('title').style.cssText = `font-weight: 500;font-size: 25px;margin: 0;`;


// styling the text
document.getElementById('text').style.cssText = `font-family: 'Courier New', Courier, monospace;`;

// styling the button
document.getElementById('button').style.cssText = `text-align: right;`;
document.getElementById('btn').style.cssText = `padding: 12px 25px;background-color: #2ecc71;border: 1px solid transparent;outline: none;border-radius: 10px;color: #ffffff;`;


function salert(){
    container.style.display = 'flex';
    if (arguments[0]){
        document.getElementById('title').innerText = arguments[0];

    }
    if (arguments[1]){
        document.getElementById('text').innerText = arguments[1];

    }
    if(arguments[2] == 'success'){
        document.getElementById('success').style.display = 'block';
    }else if(arguments[2] == 'warning'){
        document.getElementById('warning').style.display = 'block';
    }else if(arguments[2] == 'error'){
        document.getElementById('error').style.display = 'block';
    }else if(arguments[2] == 'info'){
        document.getElementById('info').style.display = 'block';
    }else {
        document.getElementById('icon').innerText = 'Wrong command';
    }
}
document.getElementById('btn').addEventListener('click',function(){
    container.style.display = 'none';
});