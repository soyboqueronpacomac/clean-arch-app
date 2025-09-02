 export class UpdateTodoDto {
  private constructor(
    public readonly text: string,
    public readonly completedAt: Date | null = null
  ){}
  static create(props: {[key: string]: any}): [string?, UpdateTodoDto?] {
    const {  text, completedAt } = props;
    

    // Validar completedAt si se pasa
    let parsedCompletedAt: Date | null = null;
    if (completedAt) {
      const date = new Date(completedAt);
      if (isNaN(date.getTime())) return ['CompletedAt no es una fecha válida', undefined];
      parsedCompletedAt = date;
    }

    return [undefined, new UpdateTodoDto(text, parsedCompletedAt)];
  }
 }