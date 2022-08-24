function newImage(path, leftS, bottomS) {
    const newImage = document.createElement('img')
    newImage.src = path
    newImage.style.position = 'fixed'
    newImage.style.left = leftS
    newImage.style.bottom = bottomS
    document.body.append(newImage)
    return newImage
}

function newItem(path, leftS, bottomS) {
    const newItem = newImage(path, leftS, bottomS)
    // let newItem = document.createElement('img')
    // newItem.src = path
    // newItem.position = 'fixed'
    // newItem.left = leftS
    // newItem.bottom = bottomS
    // document.body.append(newItem)

    newItem.addEventListener('dblclick', function () {
        newItem.remove()
    })
}

const greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/Tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')