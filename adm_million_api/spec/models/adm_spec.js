let Adm = require("../../app/models/adm");

describe("Modelo Adm", () => {
    it("Deve retornar o medelo de Adm", () => {
        let adm = Adm;
    
        expect(adm).not.toBeUndefined();
        expect(adm.id).not.toBeUndefined();
        expect(adm.nome).not.toBeUndefined();
    
        console.log(typeof adm.todos() === "object");
        console.log(Array.isArray(adm.todos()));
        
        expect(adm.todos()).not.toBeUndefined();
        expect(Array.isArray(adm.todos())).toBe(true);
    });
});