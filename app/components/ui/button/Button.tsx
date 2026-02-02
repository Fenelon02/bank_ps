import { buttonVariants, Variant } from "./buttonVariants"
import { ButtonSizes, Size } from "./buttonSizes";
import { ReactNode, MouseEventHandler } from "react"

type ButtonProps = {
  variant: Variant
  size: Size
  children: ReactNode
  disabled?: boolean
  icon?: ReactNode
  additionalClass?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  variant,
  size,
  children,
  disabled = false,
  additionalClass = "",
  icon,
  onClick,
}: ButtonProps) {

  const btnClass = [
    buttonVariants[variant].base,
    !disabled && buttonVariants[variant].hover,
    !disabled && buttonVariants[variant].active,
    disabled && buttonVariants[variant].disabled,
    ButtonSizes[size],
    additionalClass,
  ].filter(Boolean).join(" ")


    return(
        <button className={btnClass} disabled={disabled} onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>} {children}
        </button>
    )
}