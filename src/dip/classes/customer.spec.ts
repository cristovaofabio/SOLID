import { IndividualCustomer, EnterpriseCustomer } from "./customer";

const createIndividualCustomer = (
    firstname: string,
    lastname: string,
    cpf: string,
): IndividualCustomer => {
    return new IndividualCustomer(firstname, lastname, cpf);
}

const createEnterpriseCustomer = (
    name: string,
    cnpj: string,
): EnterpriseCustomer => {
    return new EnterpriseCustomer(name,cnpj);
}

afterEach(() => jest.clearAllMocks());

describe('INDIVIDUAL CUSTOMER', () => {

    it('should have firstname, lastname and cpf', () => {
        const sut = createIndividualCustomer('Fabio', 'Silva', '000.000.000-00');

        expect(sut).toHaveProperty('firstName', 'Fabio');
        expect(sut).toHaveProperty('lastName', 'Silva');
        expect(sut).toHaveProperty('cpf', '000.000.000-00');
    });

    it('should have methods to get name and idn', () => {
        const sut = createIndividualCustomer('Fabio', 'Silva', '000.000.000-00');

        expect(sut.getName()).toBe('Fabio Silva');
        expect(sut.getIDN()).toBe('000.000.000-00');
    });
});

describe('ENTERPRISE CUSTOMER', () => {

    it('should have name and cnpj', () => {
        const sut = createEnterpriseCustomer('AutoTec', '00.000.000/0000-00');

        expect(sut).toHaveProperty('name', 'AutoTec');
    });

    it('should have methods to get name and idn', () => {
        const sut = createEnterpriseCustomer('AutoTec', '00.000.000/0000-00');

        expect(sut.getIDN()).toBe('00.000.000/0000-00');
    });
});
