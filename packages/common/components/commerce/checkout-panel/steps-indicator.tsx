import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const StepsIndicator: React.FC<{
  currentStep: number
  stepNames: string[]
  className?: string
}> = ({
  currentStep,
  stepNames,
  className=''
}) => (
  <Breadcrumb className={className}>
    <BreadcrumbList>
      {stepNames.map((name, i) => (
        <>
          <BreadcrumbItem key={i}>
            <BreadcrumbLink className={cn(
                currentStep >= i ? 'text-foreground' : '',
                'hover:text-muted-2'  
              )}
            >
              {name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {i !== stepNames.length - 1 && <BreadcrumbSeparator />}
        </>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
)

export default StepsIndicator
