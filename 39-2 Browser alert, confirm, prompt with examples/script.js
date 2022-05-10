console.log('i am here');

//alert('ma is coming!!')

const maComing = () => {
    alert('Ammu is coming');
}

const askPicnic = () => {
    const response = confirm('Are you going?');
    console.log(response);
    if (response === true) {
        alert('bkash kor');
    }
    else {
        console.log('DGM!!!')
    }
}

const askName = () => {
    const name = prompt('whats ur name?');
    if (name) {
        console.log(name)
    }
}