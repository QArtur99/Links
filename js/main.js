let ccListBy4 = [
    'Hero Patterns by Steve Schoger'
]

let ccListBySa3 = [
    'Japanese Asanoha by Olga Libby'
    , 'Circles Dark by Wow Patterns'
    , 'Eternal Cloth by Marketeros Digital'
    , 'Congruent Pentagon Outline by Atle Mo'
    , 'Contemporary China by Adam Charlts'
    , 'Folk Pattern by Askar Assanbekov'
    , 'Hypnotize by Akash'
    , 'Intersection by Mohd PH'
    , 'Morocco Pattern by by Tomislava Babić'
    , 'Organic Tiles by Zubair'
    , 'Japanese Sayagata by Olga Libby'
    , 'Swirl by Uday',
]

let freePicHref = [
    'https://www.freepik.com/free-photos-vectors/circle'
    , 'https://www.freepik.com/free-photos-vectors/background'
    , 'https://www.freepik.com/free-photos-vectors/sport'
    , 'https://www.freepik.com/free-photos-vectors/heart'

]

let freePicInner = [
    'Circle vector created by freepik - www.freepik.com'
    , 'Background vector created by brgfx - www.freepik.com'
    , 'Sport vector created by sergey_kandakov - www.freepik.com'
    , 'Heart vector created by freepik - www.freepik.com'
]

const licenceLinkCcBy4 = 'https://creativecommons.org/licenses/by/4.0/'
const licenceCcBy4 = 'CC BY 4.0'
const licenceCcBySa3 = 'CC BY-SA 3.0'
const licenceLinkCcBySa3 = 'https://creativecommons.org/licenses/by/4.0/'


document.addEventListener('DOMContentLoaded', (event) => {
    fillList(ccListBy4, licenceCcBy4, licenceLinkCcBy4)
    fillList(ccListBySa3, licenceCcBySa3, licenceLinkCcBySa3)
    fillListFreePic(freePicInner, freePicHref)
});

fillList = (ccList, licenceString, licenceLink) => {
    const ul = document.getElementById('credit-list')
    ccList.forEach(listItem => {
        ul.append(createListItem(listItem, licenceString, licenceLink))
    })
}

fillListFreePic = (freePicInner, freePicHref) => {
    const ul = document.getElementById('freepik-list')
    for(let i=0; freePicInner.length > i; i++){
        ul.append(createListItemFreePic(freePicInner[i], freePicHref[i]))
    }
}


createListItem = (listItem, licenceString, licenceLink) => {
    const li = document.createElement('li')

    const text = document.createElement('p')
    text.innerHTML = listItem + ', used under '

    const licence = document.createElement('a')
    licence.innerHTML = licenceString
    licence.href = licenceLink
    text.append(licence)

    li.append(text)

    return li
}

createListItemFreePic = (freePicInner, freePicHref) => {
    const li = document.createElement('li')
    const text = document.createElement('p')

    const licence = document.createElement('a')
    licence.innerHTML = freePicInner
    licence.href = freePicHref
    text.append(licence)

    li.append(text)

    return li
}
