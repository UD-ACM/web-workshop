function updateSpaceObject() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=vX2cVX9UoDKWsZXW6krrorK4zN56mQdhH0HxIIWv&count=1')
    .then(res => res.json())
    .then(res => {
        let spaceObject = res[0];
        let title = document.getElementById('image-title')
        let desc = document.getElementById('image-desc')
        let image = document.getElementById('image')

        title.innerHTML = spaceObject.title;
        desc.innerHTML = spaceObject.explanation;
        image.src = spaceObject.url;
        image.alt = spaceObject.title;
    })
}

document.getElementById('find-button').addEventListener(
    'click', updateSpaceObject
)