// Questão 3


function partes(str){
			var map = new Map();

			for(var i = 0; i < str.length; i++){
				for(var j = i; j < str.length; j++){
					var valC = str.substring(i, j+1);
					
					var valor = new String(valC);
					if (map.containsKey(valor))
						map.set(val, map.get(valor)+1);
					else
						map.set(val, 1);
				}
			}
			var anagramPairCount = 0;
			for (var m in map){
				var n = map.get(key);
				anagramPairCount += (n * (n-1))/2;
			}
			console.log(anagramPairCount);
		}