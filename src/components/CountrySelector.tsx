
import { useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CountrySelectorProps {
  onSelect: (country: string) => void;
  selectedCountry?: string;
  className?: string;
}

const countries = [
  { value: "us", label: "United States", flag: "🇺🇸" },
  { value: "ca", label: "Canada", flag: "🇨🇦" },
  { value: "uk", label: "United Kingdom", flag: "🇬🇧" },
  { value: "au", label: "Australia", flag: "🇦🇺" },
  { value: "nz", label: "New Zealand", flag: "🇳🇿" },
  { value: "de", label: "Germany", flag: "🇩🇪" },
  { value: "fr", label: "France", flag: "🇫🇷" },
  { value: "jp", label: "Japan", flag: "🇯🇵" },
  { value: "sg", label: "Singapore", flag: "🇸🇬" },
  { value: "ae", label: "United Arab Emirates", flag: "🇦🇪" },
];

const CountrySelector = ({ onSelect, selectedCountry, className }: CountrySelectorProps) => {
  const [open, setOpen] = useState(false);
  
  // Find the selected country object based on the value
  const selected = countries.find(
    (country) => country.value === selectedCountry
  );

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-white border-gray-200 hover:bg-gray-50"
          >
            {selected ? (
              <div className="flex items-center">
                <span className="mr-2">{selected.flag}</span>
                <span>{selected.label}</span>
              </div>
            ) : (
              <span className="text-gray-500">Select country</span>
            )}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <CommandInput placeholder="Search countries..." className="border-0 focus:ring-0 focus:outline-none" />
            </div>
            <CommandList>
              <CommandEmpty>No countries found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    onSelect={(currentValue) => {
                      onSelect(currentValue);
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 cursor-pointer"
                  >
                    <span className="mr-1">{country.flag}</span>
                    <span>{country.label}</span>
                    {selectedCountry === country.value && (
                      <Check className="ml-auto h-4 w-4 text-emerald" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CountrySelector;
