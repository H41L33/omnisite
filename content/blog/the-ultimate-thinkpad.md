---
title: The Ultimate Thinkpad
date: 2025-12-05
description: "Building the ultimate ThinkPad T540P with a PGA-adapted i7-4980HQ CPU, upgraded cooling, and Gentoo Linux. A detailed guide covering hardware mods, kernel customization, and WindowMaker setup."
type: entry
template: page.html
author: Hayden
tags: [thinkpad, linux, gentoo, build]
---

# The Ultimate ThinkPad

## Introduction

[!NOTE] This project was inspired by [!EXTERNAL] [Ionic1k's "Building the ultimate ThinkPad!"](https://www.youtube.com/watch?v=vtkQiLkNgOI).

Since my foray into Linux some 5 or 6 years ago, ThinkPads (specifically the big, the bulky, the **ancient** ThinkPads) have always eluded me. I started on my desktop gaming PC, which, if I remember correctly, rocked a Ryzen 5 3600 with 16GB of RAM, a 1TB SSD, and an RX 590 (later upgraded to an RX 6800XT—man, I loved that card).

As my formal education progressed, the need for a mobile platform grew. I picked up an Acer Aspire laptop with what I think was a 5th gen Ryzen mobile chip. It was a solid machine and did what I needed it to do.

About a year later, however, I had a massive tonal shift in my technology, starting with an iPhone 15 Pro.

This relit the kid in me—the kid who loved Apple. I remember getting so excited to visit Apple Stores when I was small.

I had moved away from them mostly due to herd mentality, as I see now. I realised this when getting the iPhone 15 Pro... I had never actually given them an honest chance with a modern product.

It was the software for me, the design, the consistency (although they fumbled that shortly after with the universal 26 OS update, "Tahoe", Liquid Glass—which I actually really liked the design of, but my oh my was it buggy).

Having used the iPhone for a while, and as my laptop needs grew while my desktop PC needs diminished, I went all-in with a MacBook Air M2.

This was the end for me and Linux.

Sure, Asahi is a project, and it does work—I even used it! But the experience was, understandably, worse than macOS. The whole reason I had chosen an Apple laptop was for the integration and consistency of the ecosystem, which I forewent for the sake of Linux.

Fast forward to today, and I pulled the trigger. It's been years, the whole `Wayland` vs `Xorg` fiasco has come and gone, people have been polarised, and `Wayland` will lead us into the future. It feels like the Star Wars OT now: `Wayland` and `Xorg` had a big fight, turmoil, deception, and then `Wayland` won. Now there's peace, freedom, justice, and security.

Not saying that `Wayland` is as evil as the Galactic Empire—those thoughts are for a different post. I'm just saying that `Wayland` is the future, and it's time to move on from `Xorg`.

So, in this calm Linux-scape we now find ourselves in, I think it's time I return to the promised land. Properly this time.

## The T540P

It's not the worshipped **T480**, or the highly regarded **T440P**. It's the larger, bulkier, more industrial cousin to both of them.

It's the **T540P**.

I chose this for a very specific reason... **Cooling**.

The **T540P** is slightly thicker than the **T440P** and much larger too, allowing more air to move around inside the chassis. This is critical, not because of the workloads I'm giving it, but because of the chip I'm shoving inside it.

Also, the **T540P** comes with a slower **i5-4300**, which is actually ideal for me since I'm replacing the CPU, which you'll see in a moment, and so I can save quite a significant chunk of change. The **T540P** cost me **half** of what the **T440P** would've.

And for that new CPU, I present to you, straight from the mystical promised land of China, couriered to my doorstep by the fabled AliExpress...

**A PGA-Adapted Core i7-4980HQ**.

This chip cost me as much as the whole **T540P**, but my oh my was it worth it. Just to have something like this is cool, but to have it in a **T540P** chassis is even better.

This chip has a massive **47W** TDP. It's 4C, 8T @ 4.0GHz—an absolute unit. The very same chip was featured in the MacBook Pro in 2014 and 2015. Yes, my **T540P** is now a **MacBook Pro** from 10 years ago. When it was used in the MacBook Pro, however, it was a BGA (Ball-Grid-Array) chip. Theoretically, it works with anything Haswell, so finding them with PGA adapter boards is not too hard, especially due to the emergent subculture nursed by its usage and now e-waste abundance in old MacBooks and their demand for today's usage in ThinkPads. They're few and far between, but not impossible.

And I got one!

That chip means I need all the cooling room I can muster. I will also be tweaking the kernel and undervolting it to keep it in check, and I have a more capable heatsink to use.

### The Build - Hardware

Obviously, this **T540P** is not remaining stock. I have:

- A PGA-adapted Core i7-4980HQ
- A more capable heatsink from a version of the laptop which had a dGPU.
- A new pair of 2x8GB PC3L-12800S RAM modules, Samsung.

And that's it for now. Tame. I wanted to keep the initial build small in case the whole thing fails. If it succeeds, however, I'll add in some luxuries, such as a (much) better trackpad, 9-cell battery, backlit keyboard, newer SSD, and a FHD IPS screen.

### The Build - Software

Obviously, out of the four Linux distributions that actually matter: Debian, RHEL, Arch, and Gentoo—Gentoo is the only one suitable for this build.

It's also my favourite.

The current stack is as follows:

- Gentoo Linux
  - OpenRC
- WindowMaker
  - Xorg

Didn't I just say the world has moved on to `Wayland`? Yeah... Yeah I did. But `Xorg` has that retro charm that you just can't get with `Wayland`.

I'll also be using a customised kernel to keep the chip in check and extend the battery life. I would really love to have this laptop last long enough to justify using it for college one day. That would be sick.

# The Video

This section is now moving into the video of me building the laptop, which you can view [!EXTERNAL] [here](!TODO).

## Chapter 1 - Building

### Scene 1 - Unboxing

Unbox all the parts prior to recording, open with a shot of the desk with the laptop upside-down, the parts laid out around, and the iFixIt kit.

The lighting should start off as warm, and I should be wearing normal clothing.

### Scene 2 - Building
Snap transition to purple lighting and a more Gentoo-like outfit (you know what I mean).

Begin by deconstructing the laptop, placing all parts to be replaced out-of-frame.

Bring each new part up to the camera, and show the process of installation.

Finish by putting the laptop back together, and showing the finished product.

### Scene 3 - Testing
Plug in the Ventoy drive, and boot into LMDE.

If successful, thumbs up and move on to the next scene.

## Chapter 2 - Gentoo Installation
Begin by opening terminal and the browser either-side, and go to this page.

### Scene 1 - Disks
Use `lsblk` and `cfdisk` to partition the disks:

- 256MB EFI partition
- 2GB Swap partition
- Remaining space for root partition

Afterwards there should be:

- /dev/sda1 - EFI Partition
- /dev/sda2 - Swap Partition
- /dev/sda3 - Root Partition

Initialise the filesystems:

```bash
mkfs.fat -F 32 /dev/sda1
mkswap /dev/sda2
mkfs.ext4 /dev/sda3
```

Create the mountpoints:

```bash
mkdir --parents /mnt/gentoo
```

Mount the root partition and activate the swap partition:

```bash
mount /dev/sda3 /mnt/gentoo
swapon /dev/sda2
```

Mount the EFI partition:

```bash
mount --mkdir /dev/sda1 /mnt/gentoo/efi
```

### Scene 2 - Stage3
Navigate to the installation directory:

```bash
cd /mnt/gentoo
```

Open the Gentoo [!EXTERNAL] [downloads page](https://www.gentoo.org/downloads/) and download the latest stage3 tarball.

[!TIP] This step may take a minute or two, time-lapse in the edit.

Extract the stage3 tarball:

```bash
tar --xpvf ~/Downloads/stage3-*.tar.xz --xattrs-include='*.*' --numeric-owner -C /mnt/gentoo
```

[!TIP] This step may take a minute or two, time-lapse in the edit.

Install `arch-chroot` and `genfstab`:

```bash
sudo apt install arch-install-scripts
```

### Scene 3 - Chroot
Chroot into the new system:

```bash
arch-chroot /mnt/gentoo
```

Reminder that we're in a chroot:

```bash
export PS1="(chroot) $PS1"
```

Emerge `vim`:

```bash
emerge app-editors/vim
```

[!TIP] This step may take a minute or two, time-lapse in the edit.

Replace the `/etc/portage/make.conf` file with the following:

```bash
COMMON_FLAGS="-O2 -pipe -fomit-frame-pointer -march=native"
CFLAGS="${COMMON_FLAGS}"
CXXFLAGS="${COMMON_FLAGS}"
FCFLAGS="${COMMON_FLAGS}"
RUSTFLAGS="${COMMON_FLAGS} -C target-cpu=native"

MAKEOPTS="-j8 -l8"

USE="-systemd -gnome -kde -wayland -accessibility \
     -doc -man -handbook -test -examples \
     -pipewire -pulseaudio -screencast \
     X alsa vaapi dbus acpi usb git lto bluetooth \
     udev x264 x265 mp3 flac vorbis opus \
     grub"

FEATURES="nodoc noinfo noman"

VIDEO_CARDS="intel crocus"
INPUT_DEVICES="libinput synaptics"
ACCEPT_LICENSE="-* @FREE @BINARY-REDISTRIBUTABLE"

EMERGE_DEFAULT_OPTS="-av --with-bdeps=y"
```

Generate the fstab:

```bash
genfstab -U /mnt/gentoo >> /etc/fstab
```

### Scene 4 - Kernel
Install the kernel sources & firmware:

```bash
emerge sys-kernel/gentoo-sources sys-kernel/linux-firmware sys-apps/pciutils
```

[!TIP] This step may take a minute or two, time-lapse in the edit.

List available kernels:

```bash
eselect kernel list
```

Select the latest stable kernel:

```bash
eselect kernel set 1
```

Navigate to the kernel directory:

```bash
cd /usr/src/linux
```

Plug in everything that will possibly be used, and unplug everything that will not.

This could be mice, keyboards, headphones, usb drives (should already be loaded), bluetooth devices.

Make the locale built-in config:

```bash
make localyesconfig
```

Make the menuconfig:

```bash
make menuconfig
```

Verify these options:

```bash
General setup.
[*] POSIX Access Control Lists                                  (CONFIG_FS_POSIX_ACL)
[*] Control Group support                                       (CONFIG_CGROUPS)
[*] Namespaces support                                          (CONFIG_NAMESPACES)
    [*] User namespace                                          (CONFIG_USER_NS)
[*] Configure standard kernel features (expert users)           (CONFIG_EXPERT)
    [ ] Load all symbols for debugging/ksymoops                 (CONFIG_KALLSYMS - Disable for speed/size)

Processor type and features.
    Processor family (Haswell)                                  (CONFIG_MCORE2)
[*] Multi-core scheduler support                                (CONFIG_SCHED_MC)
    Preemption Model (Voluntary Kernel Preemption (Desktop))    (CONFIG_PREEMPT_VOLUNTARY)
    Timer frequency (300 HZ)                                    (CONFIG_HZ_300)
[*] Tickless System (Dynamic Ticks)                             (CONFIG_NO_HZ)
    (X) Idle dynticks system (NO_HZ_IDLE)                       (CONFIG_NO_HZ_IDLE)
[*] EFI runtime service support                                 (CONFIG_EFI)
[*] EFI stub support                                            (CONFIG_EFI_STUB)
[*] MTRR (Memory Type Range Register) support                   (CONFIG_MTRR)

Power management and ACPI options.
[*] ACPI (Advanced Configuration and Power Interface) Support   (CONFIG_ACPI)
    [*] Battery                                                 (CONFIG_ACPI_BATTERY)
    [*] Video                                                   (CONFIG_ACPI_VIDEO)
    [*] Button                                                  (CONFIG_ACPI_BUTTON)
    CPU Frequency scaling
        Default CPUFreq governor (powersave)                    (CONFIG_CPU_FREQ_GOV_POWERSAVE)
        x86 CPU Frequency scaling drivers
            [*] Intel P state control                           (CONFIG_X86_INTEL_PSTATE)

Networking.
[*] Wireless                                                    (CONFIG_WIRELESS)
    [*] cfg80211 - wireless configuration API                   (CONFIG_CFG80211)
    [*] Generic IEEE 802.11 Networking Stack (mac80211)         (CONFIG_MAC80211)
[*] Bluetooth subsystem support                                 (CONFIG_BT)
    Bluetooth device drivers
        [*] HCI USB driver                                      (CONFIG_BT_HCIBTUSB)

Device drivers.
    Network device support
        [*] Ethernet driver support
            [*] Intel devices
                [*] Intel(R) PRO/1000 PCI-Express Gigabit       (CONFIG_E1000E)

    Multimedia support                                          (CONFIG_MEDIA_SUPPORT)
        [*] Cameras/video grabbers support
            Media drivers
                [*] Media USB Adapters
                    [*] USB Video Class (UVC)                   (CONFIG_USB_VIDEO_CLASS)

    Graphics support
        [*] Direct Rendering Manager (DRM)                      (CONFIG_DRM)
        [*] Intel 8xx/9xx/G3x/G4x/HD Graphics                   (CONFIG_DRM_I915)

    Sound card support
        [*] Advanced Linux Sound Architecture                   (CONFIG_SND)
            [*] HD-Audio                                        (CONFIG_SND_HDA_INTEL)
                [*] Build Realtek HD-audio codec support        (CONFIG_SND_HDA_CODEC_REALTEK)
                [*] Build HDMI/DisplayPort HD-audio codec       (CONFIG_SND_HDA_CODEC_HDMI)
            [*] USB sound devices
                [*] USB Audio/MIDI driver                       (CONFIG_SND_USB_AUDIO)

    Input device support
        [*] Mice
            [*] PS/2 mouse                                      (CONFIG_MOUSE_PS2)
                [*] Synaptics PS/2 mouse protocol               (CONFIG_MOUSE_PS2_SYNAPTICS)

    Hardware Monitoring support
        [*] Intel Core/Core2/Atom temperature sensor            (CONFIG_SENSORS_CORETEMP)
        [*] ACPI Thermal Model                                  (CONFIG_SENSORS_ACPI_POWER)

    USB support
        [*] xHCI HCD (USB 3.0) support                          (CONFIG_USB_XHCI_HCD)
        [*] EHCI HCD (USB 2.0) support                          (CONFIG_USB_EHCI_HCD)

    MMC/SD/SDIO card support
        [*] Realtek PCI-E SD/MMC Card Interface Driver          (CONFIG_MMC_REALTEK_PCI)

    X86 Platform Specific Device Drivers
        [*] ThinkPad ACPI Laptop Extras                         (CONFIG_THINKPAD_ACPI)
            [*] Console audio control ALSA interface            (CONFIG_THINKPAD_ACPI_ALSA_SUPPORT)

File systems.
    [*] The Extended 4 (ext4) filesystem                        (CONFIG_EXT4_FS)
    [*] Btrfs filesystem support                                (CONFIG_BTRFS_FS)
    
    CD-ROM/DVD Filesystems
        [*] ISO 9660 CDROM file system support                  (CONFIG_ISO9660_FS)
        [*] Microsoft Joliet CDROM extensions                   (CONFIG_JOLIET)
        [*] UDF file system support                             (CONFIG_UDF_FS)

    DOS/FAT/EXFAT/NT Filesystems
        [*] MSDOS fs support                                    (CONFIG_MSDOS_FS)
        [*] VFAT (Windows-95) fs support                        (CONFIG_VFAT_FS)
        [*] exFAT filesystem support                            (CONFIG_EXFAT_FS)
        [*] NTFS file system support                            (CONFIG_NTFS_FS)
```

Make the kernel & install:

```bash
make -j$(nproc) && make modules_install && make install
```

[!WARNING] This is going to take a VERY LONG TIME. Go to work, or sleep, or a quick weekend getaway.