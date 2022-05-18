import postData from './services/requests';

const forms = (formsBlock, tokenIDname, chatIDname) => {
    const form = document.querySelectorAll(formsBlock),
        token = tokenIDname, // look to README
        chatId = chatIDname; // look to README

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector(your_Input).value,
            phone = form.querySelector(your_Input).value,
            message = form.querySelector(your_Input);

        let text;

        text = encodeURI(`Message from form :)😂\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`);

        postData(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`)
            .then(() => {
                // Do what you need
            })
            .catch(() => {
                // Do what you need
            })
            .finally(() => {
                // Do what you need
            });
    });
};

export default forms;
