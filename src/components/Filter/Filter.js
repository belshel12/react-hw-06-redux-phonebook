import { FilterContainer, Label, FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../redux/store";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter);

  return (
    <FilterContainer>
      <Label>
        Find contacts by name
        <FilterInput
          name="filter"
          onChange={(e) => dispatch(addFilter(e.target.value))}
          value={value}
        />
      </Label>
    </FilterContainer>
  );
};

export default Filter;
