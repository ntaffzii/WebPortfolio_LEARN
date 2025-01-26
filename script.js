function copyEmail() {
    const email = "xxxxxxxxxxx@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard: ' + email);
    }).catch(err => {
        console.error('Could not copy email: ', err);
    });
}
