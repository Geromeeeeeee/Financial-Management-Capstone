export default function useFilter({ setFilter, setIsFilterOpen }) {
  const selectFilter = (value) => {
    setFilter(value);
    setIsFilterOpen(false);
  };

  return { selectFilter };
}
