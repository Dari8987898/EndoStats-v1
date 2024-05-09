import { GenericTableColumns, GenericTableInterface } from "./generic-table.interface";

export interface AmbulatorioTableInterface extends GenericTableInterface {
    numero_telefono: string;
}

export const AmbulatorioTableColumns = GenericTableColumns.concat(['numero_telefono']);