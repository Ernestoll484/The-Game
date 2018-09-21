	function Rust(){
	var vraag0 =  prompt('Welkom bij Rust the game! Start deze game door start te typen!(in kleine letters)Alle Vragen beantwoorden in HOOFDLETTERS!')
				if (vraag0 == 'start' ) {var vraag1 = prompt('Je bent net gespawned, Verzamel je eerst hout of ga je eten? A.verzamel hout.  B.eten .')
					if (vraag1 == 'A' ) {var vraag2 = prompt('Goedzo je hebt hout. je krijgt trek maar je hebt ook onderdak nodig, wat ga je doen. A: Eten zoeken. B: base builden')
						if (vraag2 == 'B') {var vraag3 = prompt('Je hebt nu een base gebouwd. Je hebt nu insane honger. wat ga je doen A: eten B: materiaal verzamelen voor wapens')
							if (vraag3 == 'A') {var vraag4 = prompt('Je hebt nu lekker gegeten. Het begint nacht te worden, wat ga je doen. A: een bed maken. B: eropuit om materialen te zoeken voor wapens.')
								if (vraag4 == 'A') {var vraag5 = prompt('Je hebt een bed gemaakt. Het is nu ochtend. Je hebt nog steeds een wapen nodig. A: materialen zoeken voor wapens. B: Naar de mining outpost voor components')
									if (vraag5 == 'A') {var vraag6 = prompt('Je hebt wat hout steen en metaal gevonden. Je hebt een crossbow en een nailgun gecraft, je wilt iets sterkers. A: Naar mining outpost voor components. B: Nog meer metaal halen')
										if (vraag6 == 'A') {var vraag7 = prompt('Je hebt de benodigde components voor een AK-47u. A: je gaat meer components zoeken. B: je gaat een AK-47u maken.')	
	
											if (vraag7 == 'B') {var vraag8 = prompt('Je hebt een AK-47u gemaakt! je hoort iemand langs je base lopen. Ga je hem killen of wacht je tot die weg gaat? A: in base blijven. B: erop af gaan en hem killen.')
												if (vraag8 == 'B') {var vraag9 = prompt('Je rent op hem af, je ziet dat hij een SMG heeft. Ga je op hem schieten of ga je proberen dichterbij te komen? A: Schieten. B: Dichterbij komen')
													if (vraag9 == 'A') {var vraag10 = prompt('Goedzo! een AK-47u is beter op afstand dan een SMG. Je hebt hem dood. Door deze vent gekilled te hebben, heb je het spel gehaald! Gj. Type: "Finish" om af te ronden.')
														if (vraag10 = 'Finish') {alert("GG je hebt het spel uitgespeeld.")

														}
														} else {alert("Game over! noob...")	
															blyat();					
														}
													} else {alert("Game over! noob...")	

													}blyat();
												} else {alert("Game over! noob...")											
												}blyat();
											} else {alert("Game over! noob...")
										}blyat();
										} else {alert("Game over! noob...")
									}blyat();
									} else {alert("Game over! noob...")
								}blyat();
								} else {alert("Game over! noob...")
							}blyat();
							} else {alert("Game over! noob...")
						}blyat();
						} else {alert("Game over! noob...")
					}blyat();
	 				} else {alert("Game over! noob...")
	 				blyat();
	 			}
}

function blyat(){
	document.body.style.backgroundImage ="url('img/giphy.gif')";
	document.getElementById('blyat').hidden = true;
}