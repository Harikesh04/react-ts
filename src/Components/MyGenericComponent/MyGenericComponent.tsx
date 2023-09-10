type MyGenericComponentProps<T> = {
    data: T;
  };
  
  // Create a generic component
 export default function MyGenericComponent<T>({ data }: MyGenericComponentProps<T>) {
    return (
      <div>
        {data}
      </div>
    );
  }