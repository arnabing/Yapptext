'use client'

import { useState } from 'react'
import { Check, ChevronsUpDown, Languages, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const languages = [
  { value: 'original', label: 'Original', flag: '🔄' },
  { value: 'spanish', label: 'Spanish', flag: '🇪🇸' },
  { value: 'french', label: 'French', flag: '🇫🇷' },
  { value: 'german', label: 'German', flag: '🇩🇪' },
  { value: 'italian', label: 'Italian', flag: '🇮🇹' },
  { value: 'portuguese', label: 'Portuguese', flag: '🇵🇹' },
  { value: 'chinese', label: 'Chinese', flag: '🇨🇳' },
  { value: 'japanese', label: 'Japanese', flag: '🇯🇵' },
  { value: 'korean', label: 'Korean', flag: '🇰🇷' },
  { value: 'arabic', label: 'Arabic', flag: '🇸🇦' },
  { value: 'hindi', label: 'Hindi', flag: '🇮🇳' },
  { value: 'russian', label: 'Russian', flag: '🇷🇺' },
  { value: 'dutch', label: 'Dutch', flag: '🇳🇱' },
]

interface LanguageSelectorProps {
  onTranslate: (language: string) => void
  isTranslating: boolean
}

export function LanguageSelector({ onTranslate, isTranslating }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleSelect = (currentValue: string) => {
    setValue(currentValue)
    setOpen(false)
    if (currentValue) {
      onTranslate(currentValue)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          disabled={isTranslating}
          className="justify-between"
        >
          {isTranslating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Translating...
            </>
          ) : (
            <>
              <Languages className="h-4 w-4 mr-2" />
              {value
                ? languages.find((language) => language.value === value)?.label
                : "Translate"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={handleSelect}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <span className="mr-2">{language.flag}</span>
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}