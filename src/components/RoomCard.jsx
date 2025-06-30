import { Card, Image, Text, Badge, Button, Group,  Grid} from '@mantine/core';

export default function RoomCards({data}) {
  return (
   <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={data?.image}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{data?.name}</Text>
        <p>{data?.price}</p>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord.
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
    </Grid.Col>
  );
}