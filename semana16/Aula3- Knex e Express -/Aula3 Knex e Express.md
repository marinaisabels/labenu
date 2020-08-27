### Exercício 1 

## a) 
Quando utilizamos a raw, enviamos as informações de uma query para um banco de dados, e após isso ela devolve uma resposta.

## b)
`` 
const searchActorByName = async(name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM ACTOR WHERE name = "${name}"
    `)
    return result
}
``

## c) 
``
const countActorsByGender = async(gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM ACTOR WHERE gender = "${gender}"
    `);
    console.log(countActorsByGender)
    return result
}
``

### Exercício 2

## a) 
``
const updateSalaryActor = async (salary: number, id: string): Promise<any> => {
    const result = await connection("ACTOR")
    .update({salary})
    .where(id)
    return result 
} 
``

## b) 
`` 

const deleteActor = async (id: string): Promise<any> => {
    const result = await connection("ACTOR")
    .delete(id)
    return result 
}
``

## c) 
``
const avgActors = async (gender: string): Promise<any> =>{
    const result = await connection("ACTOR")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};``

### Exercício 3

## a) 
O req é uma variável que possui as informações que chegam no Backend. req.params recebe as informações como parâmentos.

## b)
a linha `` res.status(200).send(actor)`` é quando o status da requisição deu certo! e a linha ``  res.status(400).send`` quando status contem algum erro.



## c)
``const app = express();
app.get("/actor?gender=", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender;
        const actor = await countActorsByGender(gender)
        res.status(200).send(actor)
    }catch (err) {
        res.status(400).send({
            mensage: err.message,
        })
    }
})

CERTO --->

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

### Exercício 4

## a)
app.post("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalary(
            req.body.salary,
            req.body.id
        );
        res.status(200).send();
    }catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
})

## b)
app.delete("/actor/:id", async (req: Request, res: Response)=>{
    try{
        await deleteActor(
            req.params.id
        );
        res.status(200).send();
    }catch (err){
        res.status(400).send({
            message: err.message,
        })
    }
})

### Exercício 5 

``
const createMovie = async (id:string, name:string, synopsis: string, releaseDate: Date, playingLimitDate: Date) => {
    await connection.insert({
        id:id, 
        name: name, 
        synopsis:synopsis,
        releaseDate: releaseDate, 
        playingLimitDate: playingLimitDate
    }).into("MOVIE")
}
app.post("/movie", async (req:Request, res: Response) => {
    try{ 
        await createMovie(
            req.body.id, 
            req.body.name,
            req.body.synopsis,
            req.body.releaseDate,
            req.body.playingLimitDate
        );
        res.status(200).send();

    }catch (err){
        res.status(400).send({
            message: err.message,
        })
    }
})
``
### Exercício 6 
``
app.get("/movie/all", async (req: Request, res:Response)=> {
    try {
        const all movies = await getMovieList();
        
        res.status(200).send()
        )
    }catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
})
``

certo --->
``
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};

app.post("/movie/:id", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
``

### Exercício 7
``app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(
    req.query.query
    );
    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
``

certo ---> 
``
app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
``
