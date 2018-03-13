export const go = () => {

    const ele = document.getElementById('mousemove')
    ele.innerHTML = 'Move your mouse to see the demo'
    ele.addEventListener('mousemove', e => {
        const {screenX, screenY} = e
        ele.innerHTML = '<div>Mouse is at: X: ' + screenX + ', Y: ' + screenY + '</div>'
    })
}

export default go
