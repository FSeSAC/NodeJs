console.log('abc');

function uploadThumbnail() {
    const formData = new FormData();

    const fileInput = document.querySelector('#thumbnail');
    console.dir(fileInput);
    console.dir(fileInput.files);

    formData.append('thumbnail', fileInput.files[0]);

    axios({
        method: 'post',
        url: 'uploads',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then(function (res) {
        console.log(res);
        console.log(res.data.path);

        document.querySelector('img').src = `/${res.data.path}`;

        document.querySelector('img').classList.add('thumbnail');
    })
}