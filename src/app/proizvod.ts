export class Proizvod {
    constructor(
        public proizvodId:number,
        public sifra:string,
        public kolicina:number,
        public naziv:string,
        public vrsta:string,
        public modelId:number,
        public vrstaProizvodaId:number
    )
    {}
}
