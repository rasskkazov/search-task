import "./styles.css";

type SearchFormProps = {
  onChange: (value: string) => void;
};
export function SearchForm(props: SearchFormProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };
  console.log("form rerendered");

  return (
    <div className="searchForm">
      <form>
        <input type="text" placeholder="Search" onChange={onChange} />
      </form>
    </div>
  );
}
