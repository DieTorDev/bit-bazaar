import {
	StyledFilter,
	StyledFilterContainer,
	StyledSearch,
	StyledSearchContainer,
	StyledSearchInput
} from './search.styles';

const Search = () => {
	return (
		<StyledSearchContainer>
			<StyledSearch>
				<img src='/images/search-icon.svg' alt='' />
				<StyledSearchInput type='text' name='' id='' placeholder='Search' />
			</StyledSearch>
			<StyledFilterContainer>
				<StyledFilter>All</StyledFilter>
				<StyledFilter>PC</StyledFilter>
				<StyledFilter>PS5</StyledFilter>
				<StyledFilter>XBox</StyledFilter>
				<StyledFilter>Switch</StyledFilter>
			</StyledFilterContainer>
		</StyledSearchContainer>
	);
};

export default Search;
