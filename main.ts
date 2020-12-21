let engine = sprites.create(img`
    1 1 1 1 1 1 1 1 
    1 6 6 6 6 6 1 1 
    1 1 8 5 6 6 6 1 
    1 1 8 6 5 6 6 1 
    1 1 8 5 6 6 6 1 
    1 1 8 6 5 6 6 1 
    1 6 6 6 6 6 1 1 
    1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
let crewMan = sprites.create(img`
    . . f f f f . . 
    . f . f . f . . 
    . f f f f f . . 
    . . f f f . . . 
    . . . f . . f . 
    . f f f f f . . 
    . . . f . . . . 
    . f f . f f . . 
    `, SpriteKind.Player)
engine.setPosition(40, 56)
crewMan.setPosition(24, 38)
controller.moveSprite(crewMan, 40, 40)
crewMan.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tiles.createTilemap(hex`0a00080009090909090909090509090909090909090706080b0404040209090606060b0404040401090606060b040404030909060606090909090909090a0a0a0909090909090909090909090909090909090909`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile14,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23], TileScale.Sixteen))
