function Gramophone(bandName, albumName, songName){
duration=(albumName.length*bandName.length)*songName.length/2;
rotations=Math.ceil(duration/2.5);
console.log(`The plate was rotated ${rotations} times.`)
}

Gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
Gramophone('Rammstein', 'Sehnsucht', 'Engel')