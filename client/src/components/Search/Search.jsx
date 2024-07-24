import {
	StyledFilter,
	StyledFilterContainer,
	StyledFilterIcon,
	StyledSearch,
	StyledSearchContainer,
	StyledSearchInput
} from './search.styles';

const Search = () => {
	return (
		<StyledSearchContainer>
			<StyledSearch>
				<img src='/images/icons/search-icon.svg' alt='' />
				<StyledSearchInput type='text' name='' id='' placeholder='Search' />
			</StyledSearch>
			<StyledFilterContainer>
				<StyledFilter>All</StyledFilter>
				<StyledFilter>PC</StyledFilter>
				<StyledFilter>
					<StyledFilterIcon src='/images/icons/playstation-icon.svg' alt='' />
					PS5
				</StyledFilter>

				<StyledFilter>
					<StyledFilterIcon src='/images/icons/xbox-icon.svg' alt='' />
					XBox
				</StyledFilter>

				<StyledFilter>
					<StyledFilterIcon src='/images/icons/switch-icon.svg' alt='' />
					Switch
				</StyledFilter>
			</StyledFilterContainer>
		</StyledSearchContainer>
	);
};

export default Search;
