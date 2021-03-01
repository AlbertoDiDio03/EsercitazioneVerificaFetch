const fetch = require("node-fetch")

accreditamento = () => {
  fetch("http://localhost:8080/accreditamento", {
      method: "post",
      body: JSON.stringify({ nome: "Alberto Di Dio" }),
      headers: { "Content-Type": "application/json" },
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}
es1 = () => {
    fetch("http://localhost:8080/esercizi/1", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data.toLowerCase()
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/1", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es2 = () => {
    fetch("http://localhost:8080/esercizi/2", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data * data
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/2", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es3 = () => {
    fetch("http://localhost:8080/esercizi/3", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data.cognome
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/3", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es4 = () => {
  fetch("http://localhost:8080/esercizi/4", {
      method: "get",
      headers: { "x-data": "true" },
  })
  .then(res => res.json())
  .then(({data}) => {
    const risultato = data.length
    console.log(risultato)
    return fetch("http://localhost:8080/esercizi/4", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}
es5 = () => {
    fetch("http://localhost:8080/esercizi/5", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data.map(w => w.toUpperCase())
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/5", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es6 = () => {
    fetch("http://localhost:8080/esercizi/6", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data.reduce((acc, n) => acc + n, 0)
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/6", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es7 = () => {
    fetch("http://localhost:8080/esercizi/7", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data
      .filter(x => x > 5)
      .reduce((acc, n) => acc + n, 0)
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/7", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es8 = () => {
    fetch("http://localhost:8080/esercizi/8", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data
      .filter((x,i) => i % 2 === 0)
      .reduce((acc, n) => acc + n, 0)
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/8", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es9 = () => {
    fetch("http://localhost:8080/esercizi/9", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data
      .filter((x) => x % 2 != 0)
      .reduce((acc, n) => acc + n, 0)
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/9", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es10 = () => {
    fetch("http://localhost:8080/esercizi/10", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
      const risultato = data.sort()
      console.log(risultato)
      return fetch("http://localhost:8080/esercizi/10", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es11 = () => {
    fetch("http://localhost:8080/esercizi/11", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = data.map(e => e.toLowerCase()).sort()
      return fetch("http://localhost:8080/esercizi/11", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es12 = () => {
    fetch("http://localhost:8080/esercizi/12", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = [data.length]
        data.map((x,i) => risultato[i] = x-1)
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/12", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es13 = () => {
    fetch("http://localhost:8080/esercizi/13", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = [data.length]
        let ultimo = data[data.length-1]
        data.map((x,i) => risultato[i] = data[i] + data[i+1])
        risultato[data.length-1] = ultimo
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/13", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es14 = () => {
    fetch("http://localhost:8080/esercizi/14", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let positivi = 0, negativi = 0, zeri = 0
        data.map(x => {
                if (x > 0) (positivi ++)
                if (x < 0) (negativi ++)
                if (x === 0) (zeri ++)
            })
        let risultato = {
            "positivi" : positivi,
            "negativi" : negativi,
            "zeri" : zeri
        }
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/14", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es15 = () => {
    fetch("http://localhost:8080/esercizi/15", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = [data.length]
        data.map((w,i) => {
            if (w.length %2 === 0) risultato[i] = w.toUpperCase()
            else (risultato[i] = w.toLowerCase())
        })
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/15", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es16 = () => {
    fetch("http://localhost:8080/esercizi/16", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = data.join(" ")
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/16", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es17 = () => {
    fetch("http://localhost:8080/esercizi/17", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = data.reduce((acc, w) => acc + w[w.length-1], "")
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/17", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es18 = () => {
    fetch("http://localhost:8080/esercizi/18", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = data
        .filter(x => x.length > 4)
        .reduce((acc, w) => acc + w[0], "")
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/18", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es19 = () => {
    fetch("http://localhost:8080/esercizi/19", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = []
        for (let i=0; i<=data; i++){
            if (data % i === 0)
            risultato.push(i)
        }
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/19", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es20 = () => {
    fetch("http://localhost:8080/esercizi/20", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = []
        data.map(l => risultato.push(l.figli.length))
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/20", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es21 = () => {
    fetch("http://localhost:8080/esercizi/21", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = data.filter(n => n <= 5)
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/21", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es22 = () => {
    fetch("http://localhost:8080/esercizi/22", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = data.filter(n => n >= 3 && n <= 6)
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/22", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es23 = () => {
    fetch("http://localhost:8080/esercizi/23", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = data.reduce((acc, o) => acc + o.anni, 0)
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/23", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es24 = () => {
    fetch("http://localhost:8080/esercizi/24", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = []
        data
        .filter((w) => w.cognome[0] === "C")
        .map(w => risultato.push(w.nome))
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/24", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es25 = () => {
    fetch("http://localhost:8080/esercizi/25", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let stringa = data.join()
        let risultato = 0
        for (let i=0; i<stringa.length; i++)
        {
            if (stringa[i] === "A" || stringa[i] === "a")
            risultato ++ }
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/25", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es26 = () => {
    fetch("http://localhost:8080/esercizi/26", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = data.map(n => n*-1)
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/26", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es27 = () => {
    fetch("http://localhost:8080/esercizi/27", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let lista = data.negozio.concat(data.magazzino).sort()
        let risultato = lista.filter((w,i) => w != lista[i+1])
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/27", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es28 = () => {
    fetch("http://localhost:8080/esercizi/28", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = {}, numeroProdotti = 0
        let lista = data.negozio.sort()
        let listaFiltrata = lista.filter((w,i) => w != lista[i+1])
        for (let i=0; i<listaFiltrata.length; i++){
            numeroProdotti = lista.filter(e => e === listaFiltrata[i]).length + data.magazzino.filter(e => e === listaFiltrata[i]).length
            risultato[listaFiltrata[i]] = numeroProdotti
        }
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/28", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es29 = () => {
    fetch("http://localhost:8080/esercizi/29", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let risultato = 1
        for (let i=1; i<= data; i++)
        risultato *= i
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/29", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es30 = () => {
    fetch("http://localhost:8080/esercizi/30", {
        method: "get",
        headers: { "x-data": "true" },
    })
    .then(res => res.json())
    .then(({data}) => {
        let y = 0, x = 0, px = 0, py = 0
        data = data.split("")
        data.forEach(p => {
            if(p === "\n")
                x=0, y++
            if(p === "X")
                px = x, py = y
            else (x++)
        })
        let risultato = {
            "x" : px-1,
            "y" : py
        }
        console.log(risultato)
      return fetch("http://localhost:8080/esercizi/30", {
        method: "post",
        body: JSON.stringify({ data: risultato }),
        headers: { "Content-Type": "application/json" }
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}