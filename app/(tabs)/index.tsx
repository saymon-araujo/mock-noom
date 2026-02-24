import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { AlertTriangle, Info } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="gap-3">
      <Text className="text-lg font-semibold text-foreground">{title}</Text>
      {children}
      <Separator className="mt-2" />
    </View>
  );
}

export default function DemoScreen() {
  const insets = useSafeAreaInsets();
  const [checked, setChecked] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('option-1');
  const [selectedFruit, setSelectedFruit] = React.useState<{ value: string; label: string } | undefined>();
  const [tabValue, setTabValue] = React.useState('tab1');
  const [progress, setProgress] = React.useState(45);
  const [inputValue, setInputValue] = React.useState('');
  const [textareaValue, setTextareaValue] = React.useState('');
  const [togglePressed, setTogglePressed] = React.useState(false);
  const [toggleGroupValue, setToggleGroupValue] = React.useState<string[]>([]);

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 32 }}
      contentContainerClassName="px-6 gap-6"
    >
      {/* Header */}
      <View className="gap-1">
        <Text className="text-3xl font-bold text-foreground">RNR Components</Text>
        <Text className="text-base text-muted-foreground">
          React Native Reusables demo showcase
        </Text>
      </View>

      <Separator />

      {/* Typography */}
      <Section title="Typography">
        <Text className="text-4xl font-extrabold text-foreground">Heading 1</Text>
        <Text className="text-3xl font-bold text-foreground">Heading 2</Text>
        <Text className="text-2xl font-semibold text-foreground">Heading 3</Text>
        <Text className="text-xl font-semibold text-foreground">Heading 4</Text>
        <Text className="text-base text-foreground">
          This is a paragraph of body text demonstrating the default text style.
        </Text>
        <Text className="text-lg text-muted-foreground">Lead text style</Text>
        <Text className="text-lg font-semibold text-foreground">Large text</Text>
        <Text className="text-sm text-foreground">Small text</Text>
        <Text className="text-sm text-muted-foreground">Muted text</Text>
      </Section>

      {/* Buttons */}
      <Section title="Buttons">
        <View className="flex-row flex-wrap gap-2">
          <Button>
            <Text>Default</Text>
          </Button>
          <Button variant="destructive">
            <Text>Destructive</Text>
          </Button>
          <Button variant="outline">
            <Text>Outline</Text>
          </Button>
          <Button variant="secondary">
            <Text>Secondary</Text>
          </Button>
          <Button variant="ghost">
            <Text>Ghost</Text>
          </Button>
          <Button variant="link">
            <Text>Link</Text>
          </Button>
        </View>
        <View className="flex-row flex-wrap gap-2">
          <Button size="sm">
            <Text>Small</Text>
          </Button>
          <Button size="default">
            <Text>Default</Text>
          </Button>
          <Button size="lg">
            <Text>Large</Text>
          </Button>
        </View>
      </Section>

      {/* Input & Textarea */}
      <Section title="Input & Textarea">
        <View className="gap-2">
          <Label nativeID="input-label">Email</Label>
          <Input
            placeholder="Enter your email"
            value={inputValue}
            onChangeText={setInputValue}
            aria-labelledby="input-label"
          />
        </View>
        <View className="gap-2">
          <Label nativeID="textarea-label">Message</Label>
          <Textarea
            placeholder="Type your message here..."
            value={textareaValue}
            onChangeText={setTextareaValue}
            aria-labelledby="textarea-label"
          />
        </View>
      </Section>

      {/* Badge */}
      <Section title="Badge">
        <View className="flex-row flex-wrap gap-2">
          <Badge>
            <Text>Default</Text>
          </Badge>
          <Badge variant="secondary">
            <Text>Secondary</Text>
          </Badge>
          <Badge variant="destructive">
            <Text>Destructive</Text>
          </Badge>
          <Badge variant="outline">
            <Text>Outline</Text>
          </Badge>
        </View>
      </Section>

      {/* Card */}
      <Section title="Card">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="text-foreground">
              This is the card content area. You can put any content here.
            </Text>
          </CardContent>
          <CardFooter className="flex-row justify-end gap-2">
            <Button variant="outline">
              <Text>Cancel</Text>
            </Button>
            <Button>
              <Text>Save</Text>
            </Button>
          </CardFooter>
        </Card>
      </Section>

      {/* Avatar */}
      <Section title="Avatar">
        <View className="flex-row gap-4">
          <Avatar alt="User avatar">
            <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
            <AvatarFallback>
              <Text>CN</Text>
            </AvatarFallback>
          </Avatar>
          <Avatar alt="Fallback avatar">
            <AvatarFallback>
              <Text>FB</Text>
            </AvatarFallback>
          </Avatar>
        </View>
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox">
        <View className="flex-row items-center gap-3">
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            nativeID="checkbox-demo"
          />
          <Label
            nativeID="checkbox-label"
            onPress={() => setChecked((prev) => !prev)}
          >
            Accept terms and conditions
          </Label>
        </View>
      </Section>

      {/* Switch */}
      <Section title="Switch">
        <View className="flex-row items-center gap-3">
          <Switch checked={switchOn} onCheckedChange={setSwitchOn} nativeID="switch-demo" />
          <Label nativeID="switch-label" onPress={() => setSwitchOn((prev) => !prev)}>
            Airplane mode
          </Label>
        </View>
      </Section>

      {/* Radio Group */}
      <Section title="Radio Group">
        <RadioGroup value={radioValue} onValueChange={setRadioValue}>
          <View className="flex-row items-center gap-3">
            <RadioGroupItem value="option-1" aria-labelledby="radio-1" />
            <Label nativeID="radio-1" onPress={() => setRadioValue('option-1')}>
              Option One
            </Label>
          </View>
          <View className="flex-row items-center gap-3">
            <RadioGroupItem value="option-2" aria-labelledby="radio-2" />
            <Label nativeID="radio-2" onPress={() => setRadioValue('option-2')}>
              Option Two
            </Label>
          </View>
          <View className="flex-row items-center gap-3">
            <RadioGroupItem value="option-3" aria-labelledby="radio-3" />
            <Label nativeID="radio-3" onPress={() => setRadioValue('option-3')}>
              Option Three
            </Label>
          </View>
        </RadioGroup>
      </Section>

      {/* Select */}
      <Section title="Select">
        <Select value={selectedFruit} onValueChange={setSelectedFruit}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem label="Apple" value="apple">
                Apple
              </SelectItem>
              <SelectItem label="Banana" value="banana">
                Banana
              </SelectItem>
              <SelectItem label="Orange" value="orange">
                Orange
              </SelectItem>
              <SelectItem label="Grape" value="grape">
                Grape
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Section>

      {/* Tabs */}
      <Section title="Tabs">
        <Tabs value={tabValue} onValueChange={setTabValue}>
          <TabsList className="flex-row">
            <TabsTrigger value="tab1" className="flex-1">
              <Text>Account</Text>
            </TabsTrigger>
            <TabsTrigger value="tab2" className="flex-1">
              <Text>Password</Text>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-foreground">Account settings content.</Text>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tab2">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-foreground">Password settings content.</Text>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Accordion */}
      <Section title="Accordion">
        <Accordion type="multiple" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text>Is it accessible?</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <Text>Is it styled?</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text>
                Yes. It comes with default styles that match the other components.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <Text>Is it animated?</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text>
                Yes. It uses Reanimated for smooth animations.
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Collapsible */}
      <Section title="Collapsible">
        <Collapsible>
          <CollapsibleTrigger>
            <Button variant="outline" className="w-full">
              <Text>Toggle Collapsible</Text>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <View className="mt-2 rounded-md border border-border p-4">
              <Text className="text-foreground">
                This content is hidden by default and shown when toggled.
              </Text>
            </View>
          </CollapsibleContent>
        </Collapsible>
      </Section>

      {/* Separator */}
      <Section title="Separator">
        <View className="gap-2">
          <Text className="text-foreground">Content above</Text>
          <Separator />
          <Text className="text-foreground">Content below</Text>
        </View>
      </Section>

      {/* Skeleton */}
      <Section title="Skeleton">
        <View className="flex-row items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <View className="gap-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
          </View>
        </View>
      </Section>

      {/* Progress */}
      <Section title="Progress">
        <Progress value={progress} className="w-full" />
        <View className="flex-row gap-2">
          <Button
            variant="outline"
            size="sm"
            onPress={() => setProgress((p) => Math.max(0, p - 10))}
          >
            <Text>- 10</Text>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onPress={() => setProgress((p) => Math.min(100, p + 10))}
          >
            <Text>+ 10</Text>
          </Button>
          <Text className="text-sm text-muted-foreground self-center">{progress}%</Text>
        </View>
      </Section>

      {/* Alert */}
      <Section title="Alert">
        <Alert icon={Info}>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert icon={AlertTriangle} variant="destructive">
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            Something needs your attention.
          </AlertDescription>
        </Alert>
      </Section>

      {/* Toggle */}
      <Section title="Toggle">
        <View className="flex-row gap-2">
          <Toggle pressed={togglePressed} onPressedChange={setTogglePressed}>
            <Text>{togglePressed ? 'Pressed' : 'Not pressed'}</Text>
          </Toggle>
        </View>
      </Section>

      {/* Toggle Group */}
      <Section title="Toggle Group">
        <ToggleGroup type="multiple" value={toggleGroupValue} onValueChange={setToggleGroupValue}>
          <ToggleGroupItem value="bold">
            <Text className="font-bold">B</Text>
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Text className="italic">I</Text>
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Text className="underline">U</Text>
          </ToggleGroupItem>
        </ToggleGroup>
      </Section>

      {/* Dialog */}
      <Section title="Dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Text>Open Dialog</Text>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a dialog description. It provides context for the dialog.
              </DialogDescription>
            </DialogHeader>
            <Text className="text-foreground">Dialog body content goes here.</Text>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">
                  <Text>Close</Text>
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      {/* Alert Dialog */}
      <Section title="Alert Dialog">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Text>Delete Account</Text>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                <Text>Cancel</Text>
              </AlertDialogCancel>
              <AlertDialogAction>
                <Text>Continue</Text>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Section>
    </ScrollView>
  );
}
