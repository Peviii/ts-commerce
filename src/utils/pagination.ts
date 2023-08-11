export interface Options {
  limite?: number;
  pagina?: number;
}

export async function pagination(data: object[], options: Options) {
  try {
    const { limite = 10, pagina = 1 } = options;    
    const startIndex = (pagina - 1) * limite;
    const endIndex = pagina * limite;
    
    return data.slice(startIndex, endIndex);
  } catch (error: any) {
    error;
  }
}

