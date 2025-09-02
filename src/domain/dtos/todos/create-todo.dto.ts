 export class CreateTodoDto {
  private constructor(
    public readonly text: string,
    public readonly completedAt: Date | null = null
  ){}
  static create(props: {[key: string]: any}): [string?, CreateTodoDto?] {
    const {  text, completedAt } = props;
    if (!text) return ['El texto es obligatorio', undefined];

    // Validar completedAt si se pasa
    let parsedCompletedAt: Date | null = null;
    if (completedAt) {
      const date = new Date(completedAt);
      if (isNaN(date.getTime())) return ['CompletedAt no es una fecha válida', undefined];
      parsedCompletedAt = date;
    }

    return [undefined, new CreateTodoDto(text, parsedCompletedAt)];
  }
 }