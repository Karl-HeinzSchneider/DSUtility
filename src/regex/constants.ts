// Coordinates
export const coordX = /[0-9]{3}[|][0-9]{3}/g
export const coordBracketX = /[(][0-9]{3}[|][0-9]{3}[)]/g

export const xCoordX = /[0-9]{3}(?=[|])/g
export const yCoordX = /[0-9]{3}(?=[)])/g
// Time
export const timeX = /Serverzeit:\s[0-9]{2}:[0-9]{2}:[0-9]{2}\s[0-9]{2}[/][0-9]{2}[/][0-9]{4}/g

// Troops
export const startX = /Dorf\s[(][0-9]*[)]\s{0,1}[\t]{10,16}Aktion/g
export const endX = /Serverzeit:\s[0-9]{2}:[0-9]{2}:[0-9]{2}\s[0-9]{2}[/][0-9]{2}[/][0-9]{4}/g
export const endFirefox = '\r'

// Supp
export const startSuppX = /Dorf\s[(][0-9]*[)]\s{0,1}[\t]Entfernung\s{0,1}[\t]{10,16}Aktion/g
export const endSuppX = timeX

export const divideOriginX = /im Dorf[\s]{0,1}/
export const divideNumberX = /[0-9]{1,100}\s{0,1}/

// Troops new
export const startTroopsX = /Dorf\s[(][0-9]*[)](WB){0,1}\s{0,1}[\t]{10,16}Aktion/g
export const endTroopsX = timeX

// Groups
export const startGroupsX = /Dorf\s[(][0-9]*[)]\s*Anzahl\s*Punkte\s*Bauernhof\s*Gruppen\s*bearbeiten/g
export const endGroupsX = timeX

