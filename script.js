const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Promt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        //catch error here
        alert(error);
    }
}

button.addEventListener("click", async () => {
    //Disable Button
    button.disabled = true;
    //start Picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});
//onLoad
selectMediaStream();

// video.addEventListener("enterpictureinpicture", () => {
//     button.textContent = "Exit Picture-in-Picture mode";
// });

// video.addEventListener("leavepictureinpicture", () => {
//     button.textContent = "Enter Picture-in-Picture mode";
// });
