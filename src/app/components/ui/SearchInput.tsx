'use client';

import React from 'react';
import { Input } from '@heroui/react';
import { SearchIcon } from '../icons/SearchIcon';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = React.memo(
  ({ value, onChange, placeholder = 'Buscar', className }) => {
    return (
      <Input
        size="lg"
        variant="bordered"
        className={`${className || ''}`}
        endContent={<SearchIcon className="text-gray-400" />}
        classNames={{
          inputWrapper: [
            'bg-white',
            'border-1',
            'border-gray-200',
            'shadow-sm',
            'hover:border-gray-300',
            'group-data-[focus=true]:border-gray-400',
            '!cursor-text',
          ],
          innerWrapper: 'bg-transparent',
          input: [
            'text-neutral-900',
            'text-sm',
            'font-medium',
            'font-["Poppins"]',
            'placeholder:text-gray-900',
          ],
        }}
        placeholder={placeholder}
        radius="lg"
        value={value}
        onValueChange={onChange}
        isClearable={false}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
