; Everything that comes after a semicolon (;) is a comment

; Assembler-time constants may be defined using 'equ'
; COOKING_TIME equ 40 sama saja dengan <variable> = <nilai>

section .text

; You should implement functions in the .text section

; the global directive makes a function visible to the test files
global expected_minutes_in_oven
expected_minutes_in_oven:
    ; TODO: This function has no arguments
    ; and must return a number
    ; mov eax,COOKING_TIME
    mov rax, 40
    ret

global remaining_minutes_in_oven
remaining_minutes_in_oven:
    ; TODO: define the 'remaining_minutes_in_oven' function
    ; This function takes one number as argument and must return a number
    ; mov rax, COOKING_TIME 
    call expected_minutes_in_oven    ; memanggil function yang tersebut dan menaruhnya di rax (40 menit)
    sub rax, rdi                     ; rax = return nilai sedangkan rdi merupakan parameter pertama
    ret

global preparation_time_in_minutes
preparation_time_in_minutes:
    ; TODO: define the 'preparation_time_in_minutes' function
    ; This function takes one number as argument and must return a 
    mov rax, rdi               ; menaruh parameter pertama ke return
    imul rax, 2                ; imul adalah algoritmaa kali (*)
    ret                        ; menutup function

global elapsed_time_in_minutes
elapsed_time_in_minutes:
    ; TODO: define the 'elapsed_time_in_minutes' function
    ; This function takes two numbers as arguments and must return a number
    call preparation_time_in_minutes     ; telah menjalankan perkalian number of layer dengan parameter pertama
    add rax, rsi                         ; menjumlah nilai yang sudah ada (dari fungsi yg telah dipanggil) dengan parameter kedua
    
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
