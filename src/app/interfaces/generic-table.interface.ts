export interface GenericTableInterface {
    row_number: number;
    nome: string;
    cognome: string;
    data_inserimento: string;
    diagnosi: string;
}

export const GenericTableColumns: string[] = ['row_number', 'nome', 'cognome', 'data_inserimento', 'diagnosi'];