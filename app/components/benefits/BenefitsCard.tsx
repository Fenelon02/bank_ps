import { benefitsCardVariants, benefitsCardVariant } from  "./BenefitsCardVariants"

type BenefitsCardProps = { msg: string, image: React.ReactNode, variant: benefitsCardVariant, aditionalClassName?: string }

export default function BenefitsCard({ msg, image, variant, aditionalClassName }: BenefitsCardProps) {
  const styles = benefitsCardVariants[variant]

  return (
    <div className={styles.base + (aditionalClassName ? aditionalClassName : "")}>
      <div className={styles.text}>
        {msg}
      </div>

      <div className="flex justify-center mt-auto">
        {image}
      </div>
    </div>
  )
}
